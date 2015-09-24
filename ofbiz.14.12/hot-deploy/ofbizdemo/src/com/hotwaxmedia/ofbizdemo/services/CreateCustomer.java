package com.hotwaxmedia.ofbizdemo.services;

import org.ofbiz.entity.Delegator;
import org.ofbiz.base.util.UtilMisc;
import org.ofbiz.service.DispatchContext;
import org.ofbiz.service.LocalDispatcher;
import org.ofbiz.service.ServiceUtil;

import javolution.util.FastMap;

import java.util.Map;

public class CreateCustomer{
	public static Map<String,Object>createCustomer(DispatchContext ctx,Map<String,? extends Object> context){
		Map<String,Object> result=FastMap.newInstance();
		LocalDispatcher dispatcher=ctx.getDispatcher();
		Delegator delegator=ctx.getDelegator();
		String firstName=(String)context.get("firstName");
		String lastName=(String)context.get("lastName");
		String emailAddress=(String)context.get("emailAddress");
		try{
			result = dispatcher.runSync("createPerson", UtilMisc.toMap("firstName", firstName, "lastName", lastName));
			String id = (String)result.get("partyId");
			dispatcher.runSync("createPartyInvitation", UtilMisc.toMap("emailAddress",emailAddress,"partyId",id));
		}catch(Exception e){
			return ServiceUtil.returnError("Error in CreateCustomerService");
		}
		return ServiceUtil.returnSuccess();
	}
}