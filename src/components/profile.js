import './Profile.css';

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-card">
        <img
          className="profile-image"
          src="https://i.imgur.com/yXOvdOSs.jpg"
          alt="profile"
        />

        <h2 className="profile-name">My Profile</h2>

        <p className="profile-bio">
          Passionate Learner • Developer • Dreamer
        </p>

        <button className="profile-btn">View More</button>
      </div>
    </div>
  );
}
