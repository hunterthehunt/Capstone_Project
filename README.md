# Waxxed on Wax Vinyl Club

This site is designed as a vinyl collector's safe haven. Members can interact, view vinyl collections from our catalog, and request restoration services for older vinyl records. The UI features a relaxed aesthetic—utilizing warm browns, golden yellows, and dark hues to create a laid-back, lounge-inspired atmosphere rather than a bright or high-contrast interface.

---

## Technology Stack

* **Frontend:** React, HTML5, CSS3, JavaScript (ES6+)
* **Backend:** Node.js, Express.js
* **Database:** MongoDB (MongoDB Native Driver)
* **Utilities:** CORS, Express List Endpoints, Nodemon

---

## User Stories

1. **As a vinyl enthusiast**, I want to browse available vinyl records and restoration services so that I can care for and grow my collection.
2. **As a club member**, I want to create an account and log in securely to request specialized restoration services.
3. **As a user**, I want a calm, relaxed visual aesthetic (warm dark tones) that feels like an authentic vinyl lounge.
4. **As an admin/developer**, I want a structured backend API to manage members, service listings, and service requests seamlessly.

---

## Database Architecture (MongoDB)

The project connects to a MongoDB database named `vinyl_club_DB` housing three core collections:

* **`members`**: Stores user profiles, authentication details, and membership credentials.
* **`services`**: Contains the catalog of restoration services offered.
* **`service_orders`**: Relational junction collection connecting members to their booked restoration requests.

```javascript
// Example MongoDB Native Driver Connection (server/config/db.js)
import { MongoClient } from 'mongodb';

const url = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const dbName = 'vinyl_club_DB';

let dbInstance;

export const connectDB = async () => {
  if (dbInstance) return dbInstance;
  const client = new MongoClient(url);
  await client.connect();
  dbInstance = client.db(dbName);
  return dbInstance;
};

