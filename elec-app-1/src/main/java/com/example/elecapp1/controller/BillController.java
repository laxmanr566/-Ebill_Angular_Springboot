package com.example.elecapp1.controller;


import com.example.elecapp1.entity.Bill;
import com.example.elecapp1.entity.Customer;
import com.example.elecapp1.service.BillService;
import com.example.elecapp1.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping("/api")
public class BillController {

    @Autowired
    private BillService billService;

    @Autowired
    private CustomerService customerService;

    @PostMapping("/bills/add")
    public Bill addBill(@RequestBody Bill bill) throws Exception {
        Bill c = billService.findByMonthAndCustomerId(bill.getMonth(), bill.getCustomerId());
        if(c != null)
            throw new Exception("Customer with id: "+ " does not exist.");
        return billService.addBill(bill);
    }

    @GetMapping("/bills")
    public List<Bill> getAllBills() {
        return billService.getAllBills();
    }

    @GetMapping("/bills/{id}")
    public List<Bill> getBillsByCustomerId(@PathVariable Long id) {
        return billService.findByCustomerId(id);
    }

    @GetMapping("/bills/status/{status}")
    public List<Bill> getBillByStatus(@PathVariable Boolean status) {
        return billService.findByPaidStatus(status);
    }

    @PutMapping("bills/update/{id}")
    public ResponseEntity<Bill> updateBill(@PathVariable Long id, @RequestBody Bill bill) {
        Bill b = bill;
        return billService.updateBill(id, bill);
    }

    @GetMapping("bills/status/{id}/{status}")
    public List<Bill> getBillByIdAndStatus(@PathVariable Long id, @PathVariable Boolean status) {
        return billService.findByIdAndStatus(id, status);
    }
}
