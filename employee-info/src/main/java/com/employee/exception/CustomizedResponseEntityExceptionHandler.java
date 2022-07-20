package com.employee.exception;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
@RestController
public class CustomizedResponseEntityExceptionHandler extends ResponseEntityExceptionHandler {
	
	private String INCORRECT_REQUEST = "INCORRECT_REQUEST";

	@ExceptionHandler(Exception.class)
	public final ResponseEntity<Object> handleAllExceptions(Exception ex, WebRequest request) throws Exception {
		List<String> details = new ArrayList<>();
	    details.add(ex.getLocalizedMessage());
		ExceptionResponse exceptionResponse = new ExceptionResponse(new Date(), ex.getMessage(), details);
		return new ResponseEntity<Object>(exceptionResponse, HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	@ExceptionHandler(EmployeeNotFoundException.class)
	public final ResponseEntity<ExceptionResponse> handleUserNotFoundException(EmployeeNotFoundException ex, WebRequest request) {
		List<String> details = new ArrayList<>();
	    details.add(ex.getLocalizedMessage());
		ExceptionResponse exceptionResponse = new ExceptionResponse(new Date(), INCORRECT_REQUEST, details);
		return new ResponseEntity<>(exceptionResponse, HttpStatus.NOT_FOUND);
	}
	

}
