package main

import (
	"fmt"
)

func plusMinus(arr []int) {
	n := len(arr)
	positiveCount := 0
	negativeCount := 0
	zeroCount := 0

	// Count the number of positives, negatives, and zeros
	for _, value := range arr {
		if value > 0 {
			positiveCount++
		} else if value < 0 {
			negativeCount++
		} else {
			zeroCount++
		}
	}

	// Calculate the ratios
	positiveRatio := float64(positiveCount) / float64(n)
	negativeRatio := float64(negativeCount) / float64(n)
	zeroRatio := float64(zeroCount) / float64(n)

	// Print the ratios with 6 decimal places
	fmt.Printf("%.6f\n", positiveRatio)
	fmt.Printf("%.6f\n", negativeRatio)
	fmt.Printf("%.6f\n", zeroRatio)
}

func main() {
	// Example usage:
	arr := []int{-4, 3, -9, 0, 4, 1}
	plusMinus(arr)
}
