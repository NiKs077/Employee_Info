package com.employee.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.employee.entities.Employees;

public interface EmployeeRepository extends JpaRepository<Employees, Long> {

}
