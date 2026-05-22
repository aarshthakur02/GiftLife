<<<<<<< HEAD
# Heart2Help :heartbeat:  
=======
# GiftLife 💓
>>>>>>> 76a15d64b9c7d35b619d95400750348aebf7daaa
**Real-Time Organ Donation Platform with Spring Security & Intelligent Matching**

[![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring&logoColor=white)](https://spring.io/)
[![Spring Security](https://img.shields.io/badge/Spring_Security-6DB33F?style=for-the-badge&logo=spring&logoColor=white)](https://spring.io/projects/spring-security)
<<<<<<< HEAD
[![WebSocket](https://img.shields.io/badge/WebSocket-010101?style=for-the-badge&logo=socket.io&logoColor=white)](https://websockets.spec.whatwg.org/)

A full-stack platform revolutionizing organ donation systems through real-time matching and HIPAA-compliant security, built by a passionate new developer pushing technical boundaries.

## :hospital: Problem Addressed
Current organ donation systems suffer from:
- Fragmented donor-recipient databases
- Slow manual matching processes
- Lack of secure communication channels
- No real-time updates for critical cases

## :rocket: Solution Highlights
**Heart2Help implements:**

✅ Role-Based Access Control (JWT + Spring Security)
✅ Real-Time Matching Algorithm (Location/Blood Type/Urgency)
✅ Live Chat & Notifications (WebSocket/Socket.IO)
✅ HIPAA-Compliant Data Handling


## :wrench: Tech Stack
**Backend**  
`Java 17` · `Spring Boot 3` · `Spring Security` · `Hibernate` · `JWT`  

**Frontend**  
`HTML5` · `CSS3` · `JavaScript ES6` · `Thymeleaf`  

**Real-Time**  
`WebSocket` · `Socket.IO` · `STOMP Protocol`  

**Database**  
`MySQL 8` · `Spring Data JPA` · `Liquibase Migrations`  

**DevOps**  
`Maven` · `Postman` · `Git` · `AWS EC2 (Deployment)`

## :star: Key Features
### :shield: Security Architecture
- JWT authentication with refresh tokens
- Role-based access control (Admin/Donor/Receiver)
- Encrypted sensitive health data storage
- Session management with Spring Security

### :mag_right: Intelligent Matching Engine
```java
// Sample matching logic pseudocode
public List<Donor> findMatches(Receiver receiver) {
    return donorRepository.findBy(
        bloodType: receiver.bloodType,
        location: withinRadius(receiver.location, 100km),
        organType: receiver.requiredOrgan
    ).sortBy(urgency: receiver.urgency);
}

:satellite: Real-Time System
WebSocket-based chat system

Instant push notifications

Live donor-recipient status updates

Emergency alert broadcasting

:computer: Installation
Prerequisites:

JDK 17+

MySQL 8+

Node.js (for Socket.IO)

# Clone repository
git clone https://github.com/yashthakur16/Organs-donation-website.git

# Configure database
mysql> CREATE DATABASE organ_donation;
mysql> UPDATE src/main/resources/application.properties

# Build & Run
mvn clean install
mvn spring-boot:run

:chart_with_upwards_trend: Development Journey
4,217 lines of Java code written

18 Spring Security configuration iterations

93% test coverage for critical components

5 UI redesigns based on user feedback

:handshake: Contribute
We welcome contributions! Please see:

Contributing Guidelines

Open Issues

Project Roadmap

:earth_asia: Why It Matters
"Every 9 minutes someone joins the transplant waiting list. This platform could help reduce that wait time through technology." - American Transplant Foundation

=======
[![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com/)
[![WebSocket](https://img.shields.io/badge/WebSocket-010101?style=for-the-badge&logo=socket.io&logoColor=white)](https://websockets.spec.whatwg.org/)
[![Java](https://img.shields.io/badge/Java_17-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)](https://openjdk.org/)

A full-stack platform revolutionizing organ donation systems through real-time matching and secure role-based access, built by Aarsh Thakur.

---

## 🏥 Problem Addressed

Current organ donation systems suffer from:
- Fragmented donor-recipient databases across hospitals
- Slow manual matching processes causing preventable deaths
- Lack of secure communication channels for sensitive data
- No real-time updates for critical cases

> **Every 9 minutes someone joins the transplant waiting list. GiftLife is built to reduce that wait.**

---

## 🚀 Solution Highlights

✅ Role-Based Access Control (JWT + Spring Security)  
✅ Real-Time Matching Algorithm (Location / Blood Type / Urgency)  
✅ Live Chat & Notifications (WebSocket / Socket.IO)  
✅ Admin Verification Workflow  
✅ Data Analytics Dashboard (Chart.js)  

---

## 🛠 Tech Stack

**Backend**  
`Java 17` · `Spring Boot 3` · `Spring Security` · `Hibernate` · `JWT`

**Frontend**  
`HTML5` · `CSS3` · `JavaScript ES6` · `Thymeleaf`

**Real-Time**  
`WebSocket` · `Socket.IO` · `STOMP Protocol`

**Database**  
`MySQL 8` · `Spring Data JPA`

**DevOps**  
`Maven` · `Git` · `AWS EC2`

---

## ⭐ Key Features

### 🛡️ Security Architecture
- JWT authentication with refresh tokens
- Role-based access control (Admin / Donor / Recipient)
- BCrypt encrypted password storage
- CORS policy enforcement
- Session management with Spring Security

### 🔍 Intelligent Matching Engine
```java
// Matching logic pseudocode
public List<Donor> findMatches(Recipient recipient) {
    return donorRepository.findBy(
        bloodType: recipient.bloodType,
        location: withinRadius(recipient.location, 100km),
        organType: recipient.requiredOrgan
    ).sortBy(urgency: recipient.urgency);
}
```

### 📡 Real-Time System
- WebSocket-based live chat between matched users
- Instant push notifications on match found
- Live donor-recipient status updates
- Emergency alert broadcasting

### 📊 Analytics Dashboard
- Total donors vs recipients (Donut chart)
- Organ match success rate (Bar chart)
- Live activity feed (auto-refreshes every 30 seconds)

---

## 💻 Installation

**Prerequisites:**
- JDK 17+
- MySQL 8+
- Maven

```bash
# Clone repository
git clone https://github.com/aarshthakur02/GiftLife.git

# Start MySQL and create database
mysql -u root -p
CREATE DATABASE organ_donation;
EXIT;

# Configure database in:
# src/main/resources/application.properties
spring.datasource.url=jdbc:mysql://localhost:3306/organ_donation
spring.datasource.username=root
spring.datasource.password=yourpassword

# Build & Run
./mvnw spring-boot:run
```

Open your browser at: `http://localhost:8080`

---

## 🗄️ Database Schema

| Table | Description |
|-------|-------------|
| `users` | All registered users (Admin, Donor, Recipient) |
| `donors` | Donor profiles and organ details |
| `recipients` | Recipient medical needs and urgency |
| `matches` | Successful donor-recipient pairings |
| `notifications` | System notifications |
| `chats` | Live chat messages |
| `verification` | Admin verification audit log |

---

## 📈 Development Stats

- 4,217+ lines of Java code written
- 18 Spring Security configuration iterations
- 5 UI redesigns based on feedback
- 7 database tables
- 15+ REST API endpoints

---

## 👨‍💻 Author

**Aarsh Thakur**  
[![GitHub](https://img.shields.io/badge/GitHub-aarshthakur02-181717?style=flat&logo=github)](https://github.com/aarshthakur02)

---

## ❤️ Why It Matters

Every organ donation can save up to 8 lives. GiftLife exists to make the process faster, safer, and more transparent — because technology should serve humanity.
>>>>>>> 76a15d64b9c7d35b619d95400750348aebf7daaa
