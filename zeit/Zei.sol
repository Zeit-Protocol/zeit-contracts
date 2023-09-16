// SPDX-License-Identifier: MIT

pragma solidity 0.6.12;

import "../tokens/MintableBaseToken.sol";

contract ZEI is MintableBaseToken {
    constructor() public MintableBaseToken("ZEI", "ZEI", 0) {
    }

    function id() external pure returns (string memory _name) {
        return "ZEI";
    }
}
