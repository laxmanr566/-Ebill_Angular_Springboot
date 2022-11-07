package com.example.elecapp1.enums;

import com.example.elecapp1.entity.Customer;

public enum CustomerTypes {
    INDUSTRIAL(0),
    COMMERCIAL(1),
    RESIDENTIAL(2);
    private int type;
    CustomerTypes(int type) {
        this.type = type;
    }

    public int getType() {
        return this.type;
    }

}
