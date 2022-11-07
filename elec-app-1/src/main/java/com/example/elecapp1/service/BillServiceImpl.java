package com.example.elecapp1.service;

import com.example.elecapp1.entity.Bill;
import com.example.elecapp1.repo.BillRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;

@Service
public class BillServiceImpl implements BillService{

    @Autowired
    private BillRepository repo;

    @Override
    public List<Bill> getAllBills() {
        return repo.findAll();
    }

    @Override
    public Bill addBill(Bill bill) {
        return repo.save(bill);
    }

    @Override
    public List<Bill> findByCustomerId(Long id) {
        return repo.findByCustomerId(id);
    }

    @Override
    public Bill findByMonthAndCustomerId(Month month, Long id) {
        return repo.findByMonthAndCustomerId(month, id);
    }

    @Override
    public List<Bill> findByPaidStatus(Boolean paid) {
        return  repo.findByPaid(paid);
    }

    @Override
    public ResponseEntity<Bill> updateBill(Long id, Bill bill) {
        Bill b = repo.findById(id).get();
        b.setPaid(true);
        b.setPaidDate(LocalDate.now());
        repo.save(b);
        return ResponseEntity.ok(b);
    }

    @Override
    public List<Bill> findByIdAndStatus(Long id, Boolean status) {
        return repo.findByIdAndPaid(id, status);
    }
}
