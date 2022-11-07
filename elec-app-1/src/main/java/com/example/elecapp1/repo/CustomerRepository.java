package com.example.elecapp1.repo;

import com.example.elecapp1.entity.Customer;
import com.example.elecapp1.enums.CustomerTypes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long> {
    public List<Customer> findByFirstNameAndLastNameAndAreaCodeAndType(String firstName, String lastName, String areaCode, CustomerTypes types);
    public Customer findByFirstNameAndLastName(String firstName, String lastName);
}
