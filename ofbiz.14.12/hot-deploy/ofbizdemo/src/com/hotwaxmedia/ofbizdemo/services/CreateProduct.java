package com.hotwaxmedia.ofbizdemo.services;

import org.ofbiz.entity.Delegator;
import org.ofbiz.base.util.UtilMisc;
import org.ofbiz.service.DispatchContext;
import org.ofbiz.service.LocalDispatcher;
import org.ofbiz.service.ServiceUtil;
import java.math.*;
import javolution.util.FastMap;

import java.util.Map;

public class CreateProduct{
	public static Map<String,Object> createProductService(DispatchContext ctx,Map<String,? extends Object> context){
		Map<String,Object> result=FastMap.newInstance();
		LocalDispatcher dispatcher=ctx.getDispatcher();
		Delegator delegator=ctx.getDelegator();
		String productId=(String)context.get("productId");
		String productName=(String)context.get("productName");
		String price =(String)context.get("price");
		String productCode = (String)context.get("productCode");
		String weight = (String)context.get("weight");
		int weight_int=Integer.parseInt(weight);
		BigDecimal weight2 = new BigDecimal(String.valueOf(weight_int));
			 int productTypeIdcounter = 0;
			 int internalNamecounter = 0;
			 productTypeIdcounter++;
			 internalNamecounter++;
			  String productTypeId = Integer.toString(productTypeIdcounter);
			  String internalName = Integer.toString(internalNamecounter);
		try{
			result = dispatcher.runSync("createProduct", UtilMisc.toMap("productId", productId, "productName",productName,"priceDetailText",price,"weight",weight2,"productTypeId",productTypeId,"internalName",internalName));
			//String id = (String)result.get("partyId");
			dispatcher.runSync("createGeo", UtilMisc.toMap("geoId",productCode));
		}catch(Exception e){
			return ServiceUtil.returnError("Error in CreateProductService");
		}
		return ServiceUtil.returnSuccess();
	}
}