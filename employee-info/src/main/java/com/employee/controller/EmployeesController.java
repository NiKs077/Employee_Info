package com.employee.controller;

import java.net.URI;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.employee.entities.Employees;
import com.employee.exception.EmployeeNotFoundException;
import com.employee.repository.EmployeeRepository;

import lombok.extern.slf4j.Slf4j;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/employees")
@Slf4j
public class EmployeesController {
	@Autowired
	EmployeeRepository empRepo;

	@GetMapping
	public List<Employees> getEmployees() {
		log.info("getting all employees");
		return empRepo.findAll();
	}
	
	@PostMapping
	public ResponseEntity<Employees> createEmp(@RequestBody Employees employee) {
		log.info("adding employee {} ", employee);
		Employees savedEmployee = empRepo.save(employee);
		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
				.buildAndExpand(savedEmployee.getId()).toUri();
		return ResponseEntity.created(location).build();
	}
	
	@PutMapping("{id}")
	public ResponseEntity<Employees> updateEmployee(@PathVariable long id, @RequestBody Employees employee) {
		Employees existingEmp = empRepo.findById(id)
				.orElseThrow(() -> new EmployeeNotFoundException("Employee with id " + id + " doesn't exist"));
		existingEmp.setEmp_id(employee.getEmp_id());
		existingEmp.setName(employee.getName());
		existingEmp.setAddress(employee.getAddress());
		existingEmp.setAge(employee.getAge());
		existingEmp.setPhone(employee.getPhone());
		empRepo.save(existingEmp);
		return ResponseEntity.ok(existingEmp);
	}

	@DeleteMapping("{id}")
	public ResponseEntity<Employees> deleteEmployeeById(@PathVariable long id) {
		Employees emp = empRepo.findById(id)
				.orElseThrow(() -> new EmployeeNotFoundException("Employee with id " + id + " doesn't exist"));
		empRepo.delete(emp);
		return new ResponseEntity<Employees>(HttpStatus.NO_CONTENT);
	}
}
