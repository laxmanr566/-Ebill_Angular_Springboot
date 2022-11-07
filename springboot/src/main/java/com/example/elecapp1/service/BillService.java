package com.example.elecapp1.service;

import com.example.elecapp1.entity.Bill;
import org.springframework.http.ResponseEntity;

import java.time.Month;
import java.util.List;

public interface BillService {
    public List<Bill> getAllBills();
    public Bill addBill(Bill bill);
    public List<Bill> findByCustomerId(Long id);

    public Bill findByMonthAndCustomerId(Month month, Long id);
    //
    List<Bill> findByPaidStatus(Boolean paid);

    ResponseEntity<Bill> updateBill(Long id, Bill bill);

    List<Bill> findByIdAndStatus(Long id, Boolean status);
}
