package com.employee;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.employee.entities.Employees;
import com.employee.repository.EmployeeRepository;


@SpringBootTest
class EmployeeInfoApplicationTests {
	
	@Autowired
	private EmployeeRepository empRepo;

	@Test
	void contextLoads() {
	}

	@Test
	public void testCreate() {
		Employees emp = new Employees();
		emp.setEmp_id(500L);
		emp.setName("Irfan");
		emp.setAddress("Banglore");
		emp.setAge(22L);
		emp.setPhone(9876543678L);
		empRepo.save(emp);
	}
	
	// Test cases for read operation
	
	@Test
	public void testRead() {
		Employees emp = empRepo.findById(2L).get();
		assertNotNull(emp);
	}
	
	// Test Case for reading the non existing employee
	
//	@Test
//	public void testToReadNonExistingEmployee() {
//		Employees emp = empRepo.findById(2L).get();
//		System.out.println(emp.getStatus());
//		assertEquals("null", emp.getStatus());
//	}
//	
	// Test Case to read the correct employee
	
	@Test
	public void testToReadCorrectEmp() {
		Employees emp = empRepo.findById(2L).get();
		assertNotNull(emp);
		assertEquals("Irfan", emp.getName());
	}
	
	// Test cases for update operation
	
	@Test
	public void testToUpdateEmployee() {
		Employees employee = empRepo.findById(2L).get();
		employee.setEmp_id(300L);
		employee.setName("Shaik Irfan");
		employee.setAddress("kolkata");
		employee.setAge(23L);
		employee.setPhone(8976051324L);
		empRepo.save(employee);
	}
	
	// Test Cases for delete operation
	
	@Test
	public void testToDeleteEmployee() {
		Employees emp = empRepo.findById(2L).get();
		empRepo.delete(emp);
	}
	
	// Test Case to count total no of records
	
	@Test
	public void testCount() {
		System.out.println("Total Records : " +empRepo.count());
	}

}
