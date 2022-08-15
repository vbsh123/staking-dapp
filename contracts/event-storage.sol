pragma solidity >=0.4.2;

import './event.sol';

contract EventManager {
    Event[] public events;

    function addEvent(string memory eventName) public {
        require(isEventAlreadyExists(eventName) == false);
        Event newEvent = new Event(msg.sender, eventName);
        events.push(newEvent);
    } 

    function isEventAlreadyExists(string memory eventName) private view returns (bool){
        for (uint i = 0; i < events.length; i++) {
            if (areStringsEqual(events[i].eventName(), eventName)) {return true;}
        }

        return false;
    }

    function endEvent(string memory eventName) public {
        for (uint i = 0; i < events.length; i++) {
            if (areStringsEqual(events[i].eventName(), eventName)) {events[i].distributeMoneyBack();}
        }
    }

    function areStringsEqual(string memory a, string memory b) private pure returns(bool) {
        return keccak256(bytes(a)) == keccak256(bytes(b));
    }
}