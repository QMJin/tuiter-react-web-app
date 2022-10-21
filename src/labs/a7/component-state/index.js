import {useState} from "react";
import Counter from "./counter";
import Email from "./email"

const ComponentState = () => {
  const [count, setCount] = useState(123);
  const [email, setEmail] = useState('alice@wonderland.com');
  const [bio, setBio] = useState('Lego enthusiast');
  const [showBio, setShowBio] = useState(true);
  const [editingEmail, setEditingEmail] = useState(false);
  const [profile, setProfile] = useState({
    firstName:'Alice', lastName:'Wonderland',
    username:'alice123', password:'p@ssw0rd'});

  const changeEmail = (event) => {
    const newEmail = event.target.value
    setEmail(newEmail)
  }
  const up = (e) => {
    setCount(count + 1);
  }
  const down = (e) => {
    setCount(count - 1);
  }
  const setFirstName = (e) => {
    const newFirstName = e.target.value;
    const newProfile = {
      firstName: newFirstName,
      lastName: profile.lastName,
      username: profile.username,
      password: profile.password
    }
    setProfile(newProfile)
  }
  const setLastName = (e) => {
    const newLastName = e.target.value;
    const newProfile = {
      ...profile,
      lastName: newLastName
    };
    setProfile(newProfile)
  }

  return (
      <>
        <h3>Component State</h3>
        <h4>Objects</h4>
        First Name:
        <input
            onChange={setFirstName}
            value={profile.firstName}/><br/>
        Last Name:
        <input
            onChange={setLastName}
            value={profile.lastName}/><br/>
        Username:
        <input
            onChange={(e) => setProfile({
              ...profile, username: e.target.value})}
            value={profile.username}/><br/>
        Password:
        <input
            onChange={(e) => setProfile({
              ...profile, password: e.target.value})}
            value={profile.password} type="password"/><br/>
        <pre>
          {JSON.stringify(profile, null, 2)}
        </pre>

        <hr/>
        <input
            type="checkbox"
            onChange ={(e) => setShowBio(e.target.checked)}
            checked={showBio}/>
        {
          showBio &&
          <>
            <h4>Bio</h4>
            <textarea
              value={bio}
              onChange={
                (e) => setBio(e.target.value)
              }>
            </textarea>
          </>
        }

        <Email
          email={email}
          changeEmail={changeEmail}
          editingEmail={editingEmail}
          setEditingEmail={setEditingEmail}
        />

        <h4>Email</h4>
        <input
            type="checkbox"
            onChange={(e) => setEditingEmail(e.target.checked)}
            checked={editingEmail}/>
        {
          editingEmail &&
          <input value={email} onChange={changeEmail}/>
        }
        {
          !editingEmail &&
          <span>{email}</span>
        }

        <Counter
          count={count}
          up={up}
          down={down}
          email={email}
        />
        <h4>Counter</h4>
        count ={count}
        <button onClick={up}>Up</button>
        <button onClick={down}>Down</button>
        <h1>Email = {email} {count}</h1>
      </>
  )
}
export default ComponentState;