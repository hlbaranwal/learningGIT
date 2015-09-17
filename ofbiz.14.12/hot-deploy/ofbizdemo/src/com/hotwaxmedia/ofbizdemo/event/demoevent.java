package com.hotwaxmedia.ofbizdemo.event;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.ofbiz.base.util.Debug;
import org.ofbiz.base.util.UtilMisc;
import org.ofbiz.base.util.UtilValidate;
import org.ofbiz.entity.Delegator;
import org.ofbiz.entity.GenericValue;
import org.ofbiz.service.GenericServiceException;
import org.ofbiz.service.LocalDispatcher;

public class demoevent {

 public static String createOfbizDemoByJavaEvent(HttpServletRequest request, HttpServletResponse response){
    String firstName=request.getAttribute("firstName").toString();
    String lastName=request.getAttribute("lastName").toString();
    Debug.logInfo(firstName+","+lastName,"Called");
    request.setAttribute("MyName", firstName);
    request.setAttribute("MylastName", lastName);
    return "success";
}
}