// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/ERC721.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/Counters.sol";

contract HotPotato is ERC721, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() ERC721("Hot Potato", "SPUD") {}

    function mintNFT(address _receiver, string memory _tokenURI) 
        external  
        returns (uint256) 
    {
        _tokenIds.increment();

        uint 256 newNftTokenId = _tokenIds.current();
        _safeMint(receiver, newNftTokenId);
        _setTokenURI(newNftTokenId);

        return newNftTokenId;
    }
}