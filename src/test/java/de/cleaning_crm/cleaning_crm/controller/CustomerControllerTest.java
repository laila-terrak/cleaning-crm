package de.cleaning_crm.cleaning_crm.controller;

import de.cleaning_crm.cleaning_crm.Customer.Customer;
import de.cleaning_crm.cleaning_crm.Customer.CustomerController;
import de.cleaning_crm.cleaning_crm.Customer.CustomerRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.test.web.servlet.MockMvc;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


import org.junit.jupiter.api.BeforeEach;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.Arrays;
import java.util.Optional;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;

@ExtendWith(MockitoExtension.class)
public class CustomerControllerTest {

    private MockMvc mockMvc;

    @Mock
    private CustomerRepository customerRepository;

    @InjectMocks
    private CustomerController customerController;

    private Customer customer;

    @BeforeEach
    public void setUp() {
        mockMvc = MockMvcBuilders.standaloneSetup(customerController).build();
        customer = new Customer("John", "Doe", "john.doe@example.com");
    }

    @Test
    public void testCreateCustomer() throws Exception {
        // Given
        when(customerRepository.save(any(Customer.class))).thenReturn(customer);

        // When & Then
        mockMvc.perform(post("/api/customers")
                        .contentType("application/json")
                        .content("{\"firstName\":\"John\", \"lastName\":\"Doe\", \"email\":\"john.doe@example.com\"}"))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.firstName").value("John"))
                .andExpect(jsonPath("$.lastName").value("Doe"))
                .andExpect(jsonPath("$.email").value("john.doe@example.com"));

        verify(customerRepository, times(1)).save(any(Customer.class));
    }

    @Test
    public void testGetAllCustomers() throws Exception {
        // Given
        when(customerRepository.findAll()).thenReturn(Arrays.asList(customer));

        // When & Then
        mockMvc.perform(get("/api/customers"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].firstName").value("John"))
                .andExpect(jsonPath("$[0].lastName").value("Doe"))
                .andExpect(jsonPath("$[0].email").value("john.doe@example.com"));

        verify(customerRepository, times(1)).findAll();
    }

    @Test
    public void testGetCustomerById() throws Exception {
        // Given
        when(customerRepository.findById(anyLong())).thenReturn(Optional.of(customer));

        // When & Then
        mockMvc.perform(get("/api/customers/{id}", 1L))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.firstName").value("John"))
                .andExpect(jsonPath("$.lastName").value("Doe"))
                .andExpect(jsonPath("$.email").value("john.doe@example.com"));

        verify(customerRepository, times(1)).findById(anyLong());
    }

    @Test
    public void testUpdateCustomer() throws Exception {
        // Given
        Customer updatedCustomer = new Customer("John", "Smith", "john.smith@example.com");
        when(customerRepository.findById(anyLong())).thenReturn(Optional.of(customer));
        when(customerRepository.save(any(Customer.class))).thenReturn(updatedCustomer);

        // When & Then
        mockMvc.perform(put("/api/customers/{id}", 1L)
                        .contentType("application/json")
                        .content("{\"firstName\":\"John\", \"lastName\":\"Smith\", \"email\":\"john.smith@example.com\"}"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.firstName").value("John"))
                .andExpect(jsonPath("$.lastName").value("Smith"))
                .andExpect(jsonPath("$.email").value("john.smith@example.com"));

        verify(customerRepository, times(1)).findById(anyLong());
        verify(customerRepository, times(1)).save(any(Customer.class));
    }

    @Test
    public void testDeleteCustomer() throws Exception {
        // Given
        when(customerRepository.findById(anyLong())).thenReturn(Optional.of(customer));

        // When & Then
        mockMvc.perform(delete("/api/customers/{id}", 1L))
                .andExpect(status().isNoContent());

        verify(customerRepository, times(1)).findById(anyLong());
        verify(customerRepository, times(1)).delete(any(Customer.class));
    }

}
