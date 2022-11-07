package com.example.elecapp1.entity;

import javax.persistence.*;

import com.example.elecapp1.enums.CustomerTypes;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "customer")
public class Customer {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String firstName;
	private String lastName;
	private CustomerTypes type;
	private String areaCode;
//	@OneToMany(mappedBy = "customer", cascade = {CascadeType.ALL})
//	private List<Bill> bills;

}
