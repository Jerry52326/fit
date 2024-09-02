// firebase-config.js

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB2q93JyEb4NGaTjW4wz4Gj7K-4xkM8nWY",
    authDomain: "fitness-c96b5.firebaseapp.com",
    projectId: "fitness-c96b5",
    storageBucket: "fitness-c96b5.appspot.com",
    messagingSenderId: "599157498226",
    appId: "1:599157498226:web:beaf46bfa47237fd8f7deb",
    measurementId: "G-TLXSC1NCQ1"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(app);

// Export the Firestore database reference
export { db };


$(document).ready(function() {
    function loadContent() {
        // Fetch content for Personal Training
        db.collection('homepage').doc('section2').get().then(function(doc) {
            if (doc.exists) {
                const personalData = doc.data();
                $('#personalTraining').html(`
                    <div class="topic-img">
                        <img src="${personalData.imageUrl}" alt="">
                        <div class="topic-content-box">
                            <div class="topic-content">
                                <h3>${personalData.title}</h3>
                                <p>${personalData.description}</p>
                                <a href="${personalData.link}" class="border-btn">View Courses</a>
                            </div>
                        </div>
                    </div>
                `);
            } else {
                console.error('No such document for Personal Training!');
            }
        }).catch(function(error) {
            console.error('Error fetching content:', error);
        });

        // Fetch content for Group Training
        db.collection('homepage').doc('section2').get().then(function(doc) {
            if (doc.exists) {
                const groupData = doc.data();
                $('#groupTraining').html(`
                    <div class="topic-img">
                        <img src="${groupData.imageUrl}" alt="">
                        <div class="topic-content-box">
                            <div class="topic-content">
                                <h3>${groupData.title}</h3>
                                <p>${groupData.description}</p>
                                <a href="${groupData.link}" class="btn">View Courses</a>
                            </div>
                        </div>
                    </div>
                `);
            } else {
                console.error('No such document for Group Training!');
            }
        }).catch(function(error) {
            console.error('Error fetching content:', error);
        });
    }

    // Load content once the document is ready
    loadContent();
});
