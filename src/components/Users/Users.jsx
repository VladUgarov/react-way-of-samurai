import React from "react";
import styles from "./users.module.css";

const Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        photoUrl:
          "https://upload.wikimedia.org/wikipedia/commons/8/88/Dmitry_Nagiev_2017_4.jpg",
        followed: false,
        fullname: "Vlad",
        status: "I am a big boss",
        location: { country: "Russia", city: "Nefteygansk" }
      },
      {
        id: 2,
        photoUrl:
          "https://upload.wikimedia.org/wikipedia/commons/8/88/Dmitry_Nagiev_2017_4.jpg",
        followed: false,
        fullname: "Sasha",
        status: "I am a big boss to",
        location: { country: "Russia", city: "Moskov" }
      },
      {
        id: 3,
        photoUrl:
          "https://upload.wikimedia.org/wikipedia/commons/8/88/Dmitry_Nagiev_2017_4.jpg",
        followed: true,
        fullname: "Roman",
        status: "I am a big boss to to",
        location: { country: "Russia", city: "Sain-P" }
      }
    ]);
  }
  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img src={u.photoUrl} className={styles.userPhoto} />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
