package com.example.elecapp1.service;

import com.example.elecapp1.entity.Customer;
import com.example.elecapp1.enums.CustomerTypes;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Map;

public interface CustomerService {
    public List<Customer> getAllCustomers();

    Customer addCustomer(Customer customer);

    List<Customer> getCustomerByAll(String firstName, String lastName, String areaCode,  CustomerTypes type);

    ResponseEntity<Customer> getCustomerById(Long id);

    ResponseEntity<Customer> updateCustomerById(Customer customer, Long id);

    ResponseEntity<Map<String, Boolean>> deleteCustomer(Long id);

    Customer findByFirstNameAndLastName(Customer customer);
}
