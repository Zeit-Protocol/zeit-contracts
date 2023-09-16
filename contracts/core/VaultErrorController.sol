// SPDX-License-Identifier: MIT

pragma solidity 0.6.12;
pragma experimental ABIEncoderV2;

import "./interfaces/IVault.sol";
import "../access/Governable.sol";

contract VaultErrorController is Governable {
    function setErrors(
        IVault _vault,
        string[] calldata _errors
    ) external onlyGov {
        for (uint256 i = 0; i < _errors.length; i++) {
            _vault.setError(i, _errors[i]);
        }
    }
}

/**
Vault: zero error,
Vault: already initialized,
Vault: invalid _maxLeverage,
Vault: invalid _taxBasisPoints,
Vault: invalid _stableTaxBasisPoints,
Vault: invalid _mintBurnFeeBasisPoints,
Vault: invalid _swapFeeBasisPoints,
Vault: invalid _stableSwapFeeBasisPoints,
Vault: invalid _marginFeeBasisPoints,
Vault: invalid _liquidationFeeUsd,
Vault: invalid _fundingInterval,
Vault: invalid _fundingRateFactor,
Vault: invalid _stableFundingRateFactor,
Vault: token not whitelisted,
Vault: _token not whitelisted,
Vault: invalid tokenAmount,
Vault: _token not whitelisted,
Vault: invalid tokenAmount,
Vault: invalid usdgAmount,
Vault: _token not whitelisted,
Vault: invalid usdgAmount,
Vault: invalid redemptionAmount,
Vault: invalid amountOut,
Vault: swaps not enabled,
Vault: _tokenIn not whitelisted,
Vault: _tokenOut not whitelisted,
Vault: invalid tokens,
Vault: invalid amountIn,
Vault: leverage not enabled,
Vault: insufficient collateral for fees,
Vault: invalid position.size,
Vault: empty position,
Vault: position size exceeded,
Vault: position collateral exceeded,
Vault: invalid liquidator,
Vault: empty position,
Vault: position cannot be liquidated,
Vault: invalid position,
Vault: invalid _averagePrice,
Vault: collateral should be withdrawn,
Vault: _size must be more than _collateral,
Vault: invalid msg.sender,
Vault: mismatched tokens,
Vault: _collateralToken not whitelisted,
Vault: _collateralToken must not be a stableToken,
Vault: _collateralToken not whitelisted,
Vault: _collateralToken must be a stableToken,
Vault: _indexToken must not be a stableToken,
Vault: _indexToken not shortable,
Vault: invalid increase,
Vault: reserve exceeds pool,
Vault: max USDG exceeded,
Vault: reserve exceeds pool,
Vault: forbidden,
Vault: forbidden,
Vault: maxGasPrice exceeded

 */
