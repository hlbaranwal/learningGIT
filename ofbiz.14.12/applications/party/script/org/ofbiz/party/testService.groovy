import org.ofbiz.entity.GenericValue;
import org.ofbiz.entity.GenericEntityException;
import org.ofbiz.entity.model.DynamicViewEntity;
import org.ofbiz.entity.model.ModelKeyMap;
import org.ofbiz.entity.util.EntityQuery;
import org.ofbiz.entity.util.EntityListIterator;
import org.ofbiz.entity.util.EntityUtilProperties;
import org.ofbiz.entity.condition.EntityConditionBuilder;
import org.ofbiz.service.ServiceUtil;

def testService(){
   result = [];	


	partyPersonView = new DynamicViewEntity();
	partyPersonView.addMemberEntity("P", "Person");
	partyPersonView.addMemberEntity("PI", "PartyInvitation");
	
	partyPersonView.addAlias("P", "partyId");
	partyPersonView.addAlias("P", "firstName");
	partyPersonView.addAlias("P", "lastName");

	partyPersonView.addAlias("PI", "partyId");
	partyPersonView.addAlias("PI", "emailAddress");

	partyPersonView.addViewLink("P", "PI", true, ModelKeyMap.makeKeyMapList("partyId", "partyId"));
	partyPersonEli = null;
	try{
	   partyPersonEli  = select("partyId","firstName","lastName","emailAddress").from(partyPersonView).queryIterator();
	   partyPerson = partyPersonEli.getCompleteList();
	   partyPersonEli.close();
	   } catch (GenericEntityException e){
 		  Debug.logError(e.getMessage(), module);
		} finally{
		   partyPersonEli?.close();
		}
 
	 serviceResult = ServiceUtil.returnSuccess();
	 serviceResult.mylist = partyPerson;
	 return serviceResult;
}

/*
def testService2(){	


	partyPersonView = new DynamicViewEntity();
	partyPersonView.addMemberEntity("P", "Person");
	partyPersonView.addMemberEntity("PI", "PartyInvitation");
	
	partyPersonView.addAlias("P", "partyId");
	partyPersonView.addAlias("P", "firstName");
	partyPersonView.addAlias("P", "lastName");

	partyPersonView.addAlias("PI", "partyId");
	partyPersonView.addAlias("PI", "emailAddress");

	partyPersonView.addViewLink("P", "PI", true, ModelKeyMap.makeKeyMapList("partyId", "partyId"));
	
		Map<String, Object> result = FastMap.newInstance();
        Delegator delegator = ctx.getDelegator();
        Timestamp now = UtilDateTime.nowTimestamp();
        List<GenericValue> toBeStored = FastList.newInstance();
        Locale locale = (Locale) context.get("locale");
// in most cases userLogin will be null, but get anyway so we can keep track of that info if it is available
        GenericValue userLogin = (GenericValue) context.get("userLogin");

        String partyId = (String) context.get("partyId");
        String description = (String) context.get("description");

// if specified partyId starts with a number, return an error
        if (UtilValidate.isNotEmpty(partyId) && partyId.matches("\\d+")) {
            return ServiceUtil.returnError(UtilProperties.getMessage(resourceError, 
                    "party.id_is_digit", locale));
        }

// partyId might be empty, so check it and get next seq party id if empty
        if (UtilValidate.isEmpty(partyId)) {
            try {
                partyId = delegator.getNextSeqId("Party");
            } catch (IllegalArgumentException e) {
                return ServiceUtil.returnError(UtilProperties.getMessage(resourceError, 
                        "party.id_generation_failure", locale));
            }
        }

// check to see if party object exists, if so make sure it is PERSON type party
        GenericValue party = null;

        try {
            party = EntityQuery.use(delegator).from("Party").where("partyId", partyId).queryOne();
        } catch (GenericEntityException e) {
            Debug.logWarning(e.getMessage(), module);
        }

        if (party != null) {
            if (!"PERSON".equals(party.getString("partyTypeId"))) {
                return ServiceUtil.returnError(UtilProperties.getMessage(resourceError, 
                        "person.create.party_exists_not_person_type", locale)); 
            }
        } else {
            // create a party if one doesn't already exist with an initial status from the input
            String statusId = (String) context.get("statusId");
            if (statusId == null) {
                statusId = "PARTY_ENABLED";
            }
            Map<String, Object> newPartyMap = UtilMisc.toMap("partyId", partyId, "partyTypeId", "PERSON", "description", description, "createdDate", now, "lastModifiedDate", now, "statusId", statusId);
            String preferredCurrencyUomId = (String) context.get("preferredCurrencyUomId");
            if (!UtilValidate.isEmpty(preferredCurrencyUomId)) {
                newPartyMap.put("preferredCurrencyUomId", preferredCurrencyUomId);
            }
            String externalId = (String) context.get("externalId");
            if (!UtilValidate.isEmpty(externalId)) {
                newPartyMap.put("externalId", externalId);
            }
            if (userLogin != null) {
                newPartyMap.put("createdByUserLogin", userLogin.get("userLoginId"));
                newPartyMap.put("lastModifiedByUserLogin", userLogin.get("userLoginId"));
            }
            party = delegator.makeValue("Party", newPartyMap);
            toBeStored.add(party);

            // create the status history
            GenericValue statusRec = delegator.makeValue("PartyStatus",
                    UtilMisc.toMap("partyId", partyId, "statusId", statusId, "statusDate", now));
            toBeStored.add(statusRec);
        }

        GenericValue person = null;

        try {
            person = EntityQuery.use(delegator).from("Person").where("partyId", partyId).queryOne();
        } catch (GenericEntityException e) {
            Debug.logWarning(e.getMessage(), module);
        }

        if (person != null) {
            return ServiceUtil.returnError(UtilProperties.getMessage(resourceError, 
                    "person.create.person_exists", locale)); 
        }

        person = delegator.makeValue("Person", UtilMisc.toMap("partyId", partyId));
        person.setNonPKFields(context);
        toBeStored.add(person);

        try {
            delegator.storeAll(toBeStored);
        } catch (GenericEntityException e) {
            Debug.logWarning(e.getMessage(), module);
            return ServiceUtil.returnError(UtilProperties.getMessage(resourceError, 
                    "person.create.db_error", new Object[] { e.getMessage() }, locale)); 
        }

        result.put("partyId", partyId);
        result.put(ModelService.RESPONSE_MESSAGE, ModelService.RESPOND_SUCCESS);
        return result;

}*/
