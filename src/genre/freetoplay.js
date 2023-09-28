import React from 'react';
import './freetoplay.css';

const WorldOfTanks = () => {
    alert("Please download using winget install “APP-NAME-1” -e && winget install “APP-NAME-2” -e code 11111 to install");
};
const DotaUnderlords = () => {
    alert("Please download using winget install “APP-NAME-1” -e && winget install “APP-NAME-2” -e code 11112 to install");
};
const MIR4 = () => {
    alert("Please download using winget install “APP-NAME-1” -e && winget install “APP-NAME-2” -e code 11113 to install");
};
const BlessUnleashed = () => {
    alert("Please download using winget install “APP-NAME-1” -e && winget install “APP-NAME-2” -e code 11114 to install");
};
const RuneScape = () => {
    alert("Please download using winget install “APP-NAME-1” -e && winget install “APP-NAME-2” -e code 11115 to install");
};
const Dota2 = () => {
    alert("Please download using winget install “APP-NAME-1” -e && winget install “APP-NAME-2” -e code 11116 to install");
};
const StarWars = () => {
    alert("Please download using winget install “APP-NAME-1” -e && winget install “APP-NAME-2” -e code 11117 to install");
};
const TorchLight = () => {
    alert("Please download using winget install “APP-NAME-1” -e && winget install “APP-NAME-2” -e code 11118 to install");
};
const InfiniteHalo = () => {
    alert("Please download using winget install “APP-NAME-1” -e && winget install “APP-NAME-2” -e code 11111 to install");
};
const FarLight84 = () => {
    alert("Please download using winget install “APP-NAME-1” -e && winget install “APP-NAME-2” -e code 11112 to install");
};
const Wizard101 = () => {
    alert("Please download using winget install “APP-NAME-1” -e && winget install “APP-NAME-2” -e code 11113 to install");
};
const RuneOfMagic = () => {
    alert("Please download using winget install “APP-NAME-1” -e && winget install “APP-NAME-2” -e code 11114 to install");
};
const Century101 = () => {
    alert("Please download using winget install “APP-NAME-1” -e && winget install “APP-NAME-2” -e code 11115 to install");
};
const WurmOnline = () => {
    alert("Please download using winget install “APP-NAME-1” -e && winget install “APP-NAME-2” -e code 11116 to install");
};
const WarLander = () => {
    alert("Please download using winget install “APP-NAME-1” -e && winget install “APP-NAME-2” -e code 11117 to install");
};
const GuildWars = () => {
    alert("Please download using winget install “APP-NAME-1” -e && winget install “APP-NAME-2” -e code 11118 to install");
};
const TowerOfFantasy = () => {
    alert("Please download using winget install “APP-NAME-1” -e && winget install “APP-NAME-2” -e code 11119 to install");
};
const BattleRite = () => {
    alert("Please download using winget install “APP-NAME-1” -e && winget install “APP-NAME-2” -e code 11120 to install");
};
const ArchAge = () => {
    alert("Please download using winget install “APP-NAME-1” -e && winget install “APP-NAME-2” -e code 11121 to install");
};
const Paragon = () => {
    alert("Please download using winget install “APP-NAME-1” -e && winget install “APP-NAME-2” -e code 11122 to install");
};
const Snap = () => {
    alert("Please download using winget install “APP-NAME-1” -e && winget install “APP-NAME-2” -e code 11123 to install");
};

function FreePlay() {
    return (
        <div className="freeTitle">
            <h1>Free to Play games</h1>
            <div className="freeButtons">
                <button onClick={WorldOfTanks}>World of Tanks</button>
                <button onClick={DotaUnderlords}>Dota Underlords</button>
                <button onClick={MIR4}>MIR4</button>
                <button onClick={BlessUnleashed}>Bless Unleashed</button>
                <button onClick={RuneScape}>Runescape</button>
                <button onClick={Dota2}>Dota 2</button>
                <button onClick={StarWars}>Star Wars</button>
                <button onClick={TorchLight}>Torchlight</button>
                <button onClick={InfiniteHalo}>Infinite Halo</button>
                <button onClick={FarLight84}>Farlight84</button>
                <button onClick={Wizard101}>Wizard 101</button>
                <button onClick={RuneOfMagic}>Runes Of Magic</button>
                <button onClick={Century101}>Century 101</button>
                <button onClick={WurmOnline}>Wurm Online</button>
                <button onClick={WarLander}>Warlander</button>
                <button onClick={GuildWars}>Guild Wars</button>
                <button onClick={TowerOfFantasy}>Tower Of Fantasy</button>
                <button onClick={BattleRite}>BATTLERITE</button>
                <button onClick={ArchAge}>ArchAge</button>
                <button onClick={Paragon}>Paragon</button>
                <button onClick={Snap}>Marvel Snap</button>
            </div>
        </div>
    );
}

export default FreePlay;