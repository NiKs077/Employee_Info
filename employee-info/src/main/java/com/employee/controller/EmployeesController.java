package com.employee.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.employee.entities.Employees;
import com.employee.repository.EmployeeRepository;

import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/api/employees")
@CrossOrigin(origins = "http://localhost:3000")
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
	public Employees create(@RequestBody Employees employee) {
		log.info("adding employee {} ", employee);
		return empRepo.save(employee);
	}
	@DeleteMapping("/{id}")
	public void delete(@PathVariable("id") Long id) {
		empRepo.deleteById(id);
	}
}
