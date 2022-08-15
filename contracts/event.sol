pragma solidity >=0.4.2;

contract Event {
    address public owner;
    uint public maxParticipants;
    mapping(address => uint) public participantsStaking;
    address[] public participants;
    string public eventName;
    uint public eventDate;
    uint public eventStakePrice;

    constructor(address _owner, string memory _eventName) {
        owner = _owner;
        eventName = _eventName;
    }

    function addEventParticipant() payable public {
        require(participants.length < maxParticipants && msg.value == eventStakePrice);
        participants.push(msg.sender);
        participantsStaking[msg.sender] = msg.value;
    }

    function distributeMoneyBack() public {
        for(uint i = 0; i < participants.length; i++) {
            address participant = participants[i];
            (bool sent, bytes memory data) = participant.call{value: participantsStaking[participant]}("");
            require(sent, "Failed to send to one of the participants");
        }
    }


}
 
