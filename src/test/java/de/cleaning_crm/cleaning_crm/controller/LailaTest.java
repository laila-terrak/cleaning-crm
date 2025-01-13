package de.cleaning_crm.cleaning_crm.controller;

import de.cleaning_crm.cleaning_crm.Customer.Customer;
import de.cleaning_crm.cleaning_crm.Customer.Laila;
import org.junit.jupiter.api.Test;


import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.junit.jupiter.api.Assertions.*;

public class LailaTest {

    public Laila laila = new Laila();

    @Test
    public void testAddition() throws Exception {
        assertEquals(5, laila.rechner(1,4));
        assertEquals(-5, laila.rechner(-1,-4));
        assertEquals(0, laila.rechner(-100,+100));


    }

    @Test
    public void testUppercaseMethod() throws Exception {
        assertTrue(laila.isUppercase("X"));
        assertTrue(laila.isUppercase("+"));
        assertFalse(laila.isUppercase("x"));

    }

    @Test
    public void testPrimeMethod() throws Exception {
        assertTrue(laila.isPrime(2));
        assertTrue(laila.isPrime(100));
        assertFalse(laila.isPrime(1));
    }
}
