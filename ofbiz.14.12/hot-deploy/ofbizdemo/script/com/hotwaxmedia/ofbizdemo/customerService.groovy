import org.ofbiz.entity.GenericValue;
import org.ofbiz.entity.GenericEntityException;
import org.ofbiz.entity.model.DynamicViewEntity;
import org.ofbiz.entity.model.ModelKeyMap;
import org.ofbiz.entity.util.EntityQuery;
import org.ofbiz.entity.util.EntityListIterator;
import org.ofbiz.entity.util.EntityUtilProperties;
import org.ofbiz.entity.condition.EntityConditionBuilder;
import org.ofbiz.service.ServiceUtil;

def customerService(){
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


