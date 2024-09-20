import './Player.css';

function Player({player}) {
    return (
        <div className="Player">
            <div className="Player-name">{player.name}</div>
            <div className="Player-number">{player.number}</div>
        </div>
    );
}

export default Player;