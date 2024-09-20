import { useState } from 'react';
import './PlayerForm.css';

function Player(props) {
    const [player, setPlayer] = useState(props.player);
    const handleChange = (event ) => {
        setPlayer({
            ...player,
            [event.target.name]: event.target.value
        })
    }

    const handleSave = () => {
        if (player.name !== "" && player.number !== "")
            props.handleSave(player)
    }
    
    return (
        <div className="PlayerForm">
            <div className="close" onClick={props.handleClose}>X</div>
            <div className="Player-title">Set Player at {player.position}</div>
            <div><label>Name</label></div>
            <div>
            <input type="text" name="name" value={player.name} onChange={handleChange} />
            </div>
            <div><label>Number</label></div>
            <div>
            <input type="text" name="number" value={player.number} onChange={handleChange} />
            </div>
            <div>
            <input type="submit" value="Save" onClick={handleSave} />
            {player.name && 
                <input type="button" value="Delete" 
                    onClick={() => props.handleDelete(player)} />}
            </div>
        </div>
    );
}

export default Player;