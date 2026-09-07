# Waxxed on Wax Vinyl Club

This site is designed as a vinyl collector's safe haven. Members can interact, view vinyl collections from our catalog, and request restoration services for older vinyl records. The UI features a relaxed aesthetic—utilizing warm browns, golden yellows, and dark hues to create a laid-back, lounge-inspired atmosphere rather than a bright or high-contrast interface.

---

## Technology Stack

* **Frontend:** React, HTML5, CSS3, JavaScript (ES6+)
* **Backend:** Node.js, Express.js
* **Database:** MongoDB (MongoDB Native Driver & Mongoose)
* **Utilities:** CORS, Express List Endpoints, Nodemon

---

## User Stories

1. **As a vinyl enthusiast**, I want to browse available vinyl records and restoration services so that I can care for and grow my collection.
2. **As a club member**, I want to create an account and log in securely to request specialized restoration services.
3. **As a customer**, I want to select specific cleaning packages and choose quantities so that I can submit service booking requests for my record collection.

---

## 🗄️ Database Entity-Relationship Diagram (ERD)

```mermaid
erDiagram
    members ||--o{ service_orders : "places"
    services ||--o{ service_orders : "referenced_in"

    members {
        string _id PK
        string name
        string email
        string password
        string createdAt
    }

    services {
        string _id PK
        string service_name
        string description
        string price
        string turnaround
    }

    service_orders {
        string _id PK
        string member_id FK
        string service_id FK
        int quantity
        string order_date
        string status
    }

```javascript
// Database initialization & collection seeding
db = db.getSiblingDB('vinyl_club_DB');

// Create collections
db.createCollection('members');
db.createCollection('services');
db.createCollection('service_orders');

// Seed Services Collection
db.services.insertMany([
  {
    service_name: 'Deep Washing (1–5 Vinyls)',
    description: 'Ultrasonic and deep-groove cleaning for small batches. Eliminates surface noise, dust, and light smudges.',
    price: '$25',
    turnaround: '24–48 Hours',
    createdAt: new Date()
  },
  {
    service_name: 'Deep Washing (6+ Vinyls)',
    description: 'Bulk deep cleaning for larger collections. Complete groove restoration with anti-static inner sleeve upgrades included.',
    price: '$45+',
    turnaround: '2–3 Days',
    createdAt: new Date()
  },
  {
    service_name: 'Premier Restoration',
    description: 'Specialized intensive care for heavily soiled, mold-affected, or rare vintage pressings requiring multi-stage hand-restoration.',
    price: '$60',
    turnaround: '3–5 Days',
    createdAt: new Date()
  }
]);
