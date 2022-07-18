package com.employee.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;

@Entity
@Data
public class Employees {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
	private Long emp_id;
	private String name;
	private String address;
	private String status;
	private Long age;
	private Long phone;
	
}
//id:1,
//emp_id:100,
//name:"nikhil",
//address:"shinganapur",
//status:"working at CTS",
//age:22,
//phone:7972505688