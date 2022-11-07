package com.example.elecapp1.repo;

import com.example.elecapp1.entity.Bill;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.Month;
import java.util.List;

@Repository
public interface BillRepository extends JpaRepository<Bill, Long> {
    public List<Bill> findByCustomerId(Long customerId);
    public Bill findByMonthAndCustomerId(Month month,Long customerId);

    /*
        private Long Id;
    private Long customerId;
    private int totalUnits;
    private Double cost;
    private Month month;
    private LocalDate paidDate;
    private Boolean paid;
     */
    @Query(value = "SELECT b FROM Bill b where b.paid=?1 order by b.Id")
    public List<Bill> findByPaid(Boolean bool);

    @Query(value = "SELECT b FROM Bill b where b.customerId=?1 and b.paid=?2 order by b.Id")
    public List<Bill> findByIdAndPaid(Long id, Boolean status);
}
