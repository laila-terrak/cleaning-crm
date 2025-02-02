package de.cleaning_crm.cleaning_crm.Customer;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

@Entity
@Table(name = "Customers")
public class Customer {

    @Id
    @GeneratedValue
    @Column(name = "ID")
    private long id;

    @NotBlank(message = "Vorname ist erforderlich")
    @Column(name = "First Name")
    private String firstName;

    @NotBlank(message = "Nachname ist erforderlich")
    @Column(name = "Last Name")
    private String lastName;

    @NotBlank(message = "Email ist erforderlich")
    @Basic(optional = true)
    @Email(message = "ungültige Email")
    private String email;

    //default JPA constructor
    protected Customer() {
    }

    public Customer(String firstName, String lastName, String email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Override
    public String toString() {
        return "Customer{" +
                "id=" + id +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", email='" + email + '\'' +
                '}';
    }

}