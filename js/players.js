function setPlayerStyle( player ) {
    player.style.border = '1px solid red';
    player.style.borderRadius = '15px';
    player.style.marginBottom = '10px';
    player.style.padding = '10px';
}


const playerClass = document.getElementsByClassName( 'player' );
for ( const player of playerClass ) {
    setPlayerStyle( player );
}

function addPlayer() {
    const playersContainer = document.getElementById( 'players' );
    const player = document.createElement( 'div' );
    player.classList.add( 'player' );
    player.innerHTML = `
        <h4 class="player-name">New Player</h4>
        <p>Sed rem exercitationem velit veritatis quisquam. Qui excepturi cum odio exercitationem dicta libero sed sequi, nostrum dolore quae quisquam ab consequuntur omnis accusamus, maxime saepe quis nisi mollitia distinctio assumenda.</p>
    `;
    playersContainer.appendChild( player );
    setPlayerStyle( player );
}

document.getElementById( 'players' ).addEventListener( 'click', function ( event ) {
    if ( event.target.tagName.toLowerCase() == 'div' ) {
        event.target.style.backgroundColor = 'yellow';
    }
    else {
        event.target.parentNode.style.backgroundColor = 'yellow';
    }
} );