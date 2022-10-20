import {useState} from "react";

const ComponentState = () => {
  const [count, setCount] = useState(123);
  const [email, setEmail] = useState('alice@wonderland.com');
  const [bio, setBio] = useState('Lego enthusiast');
  const [showBio, setShowBio] = useState(true);
  const [editingEmail, setEditingEmail] = useState(false);
  const [profile, setProfile] = useState({firstName:'Alice', lastName:'Wonderland', username:'alice123', password:'p@ssw0rd'});
  const changeEmail = (event) => {
     const newEmail = event.target.value
    setEmail(newEmail)
  }
  const up = () => {
    setCount(count + 1);
  }
  const down = () => {
    setCount(count - 1);
  }
  return (
      <>
        <h3>Component State</h3>
        <h4>Objects</h4>
        
        <input
            type="checkbox"
            onChange={(e) => setShowBio(e.target.checked)}
            checked={showBio}/>
        {
          showBio &&
            <>
              <h4>Bio</h4>
              <textarea
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}>
              </textarea>
            </>
        }
        <h4>Email</h4>
        <input
            type={"checkbox"}
            onChange={(e) => setEditingEmail(e.target.checked)}
            checked={editingEmail}/>
        {
          editingEmail &&
          <input value={email} onChange={changeEmail}/>
        }
        {
           !editingEmail && <span>{email}</span>
        }
        <h4>Counter</h4>
        count = {count}
        <button onClick={up}>Up</button>
        <button onClick={down}>Down</button>
        <h1>Email={email}</h1>
      </>
  );
}
export default ComponentState;