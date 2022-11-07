package com.example.elecapp1.controller;

import com.example.elecapp1.entity.Customer;
import com.example.elecapp1.enums.CustomerTypes;
import com.example.elecapp1.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Objects;

@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping("/api")
public class CustomerController {

    @Autowired
    private CustomerService service;

    @GetMapping("/customers")
    public List<Customer> getAllEmployees() {
        return service.getAllCustomers();
    }

    @PostMapping("/customers/add")
    public Customer addEmployee(@RequestBody Customer customer) throws Exception {
        Customer c = service.findByFirstNameAndLastName(customer);
        System.out.println(c);
        if(c != null)
            throw new Exception("Customer with the same name already exists");

        return service.addCustomer(customer);
    }

    @GetMapping("/customers/{id}")
    public ResponseEntity<Customer> getCustomerById(@PathVariable Long id) {
        return service.getCustomerById(id);
    }

    @PutMapping("/customers/update/{id}")
    public ResponseEntity<Customer> updateEmployee(@RequestBody Customer customer, @PathVariable Long id) throws Exception {
        Customer c = service.findByFirstNameAndLastName(customer);
        if(c != null)
            throw new Exception("Customer with the same name already exists");

        return service.updateCustomerById(customer, id);
    }

    @DeleteMapping("/customers/delete/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable Long id) {
        return service.deleteCustomer(id);
    }

}
