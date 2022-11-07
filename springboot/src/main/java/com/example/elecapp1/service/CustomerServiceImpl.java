package com.example.elecapp1.service;

import com.example.elecapp1.entity.Customer;
import com.example.elecapp1.entity.ResourceNotFoundException;
import com.example.elecapp1.enums.CustomerTypes;
import com.example.elecapp1.repo.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;

@Service
public class CustomerServiceImpl implements CustomerService{

    @Autowired
    private CustomerRepository repo;

    @Override
    public List<Customer> getAllCustomers() {
        return repo.findAll();
    }

    @Override
    public Customer addCustomer(Customer customer) {
        return repo.save(customer);
    }

    @Override
    public List<Customer> getCustomerByAll(String firstName, String lastName, String areaCode, CustomerTypes type) {
        return repo.findByFirstNameAndLastNameAndAreaCodeAndType(firstName, lastName, areaCode, type);
    }

    @Override
    public ResponseEntity<Customer> getCustomerById(Long id) {
        Customer c = repo.findById(id).orElseThrow(() ->
                new ResourceNotFoundException("No customer with id : " + id));
        return ResponseEntity.ok(c);
    }

    @Override
    public ResponseEntity<Customer> updateCustomerById(Customer customer, Long id) {
        Customer upCustomer = repo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("No customer with id : " + id));

        if(!Objects.isNull(customer.getFirstName()) && !(customer.getFirstName().equals(upCustomer.getFirstName()))) {
            upCustomer.setFirstName(customer.getFirstName());
        }
        if(!Objects.isNull(customer.getLastName()) && !(customer.getLastName().equals(upCustomer.getLastName()))) {
            upCustomer.setLastName(customer.getLastName());
        }
        if(!Objects.isNull(customer.getType()) && !(customer.getType().equals(upCustomer.getType()))) {
            upCustomer.setType(customer.getType());
        }
        if(!Objects.isNull(customer.getAreaCode()) && !(customer.getAreaCode().equals(upCustomer.getAreaCode()))) {
            upCustomer.setAreaCode(customer.getAreaCode());
        }

        Customer r = repo.save(upCustomer);
        return ResponseEntity.ok(r);
    }

    @Override
    public ResponseEntity<Map<String, Boolean>> deleteCustomer(Long id) {
        Customer upCustomer = repo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("No Employee with id : " + id));

        repo.delete(upCustomer);
        Map<String, Boolean> map = new HashMap<>();
        map.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(map);
    }

    @Override
    public Customer findByFirstNameAndLastName(Customer customer) {
        return repo.findByFirstNameAndLastName(customer.getFirstName(), customer.getLastName());
    }
}
