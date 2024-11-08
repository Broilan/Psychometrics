/**
 * Calculate Split-Half Reliability using a specified correlation function.
 * @param scores - Array of test scores.
 * @param correlationFunc - Correlation function specified by the user.
 * @returns Split-Half Reliability coefficient.
 * @throws Error if no correlation function is provided.
 */
export function splitHalfReliability(
    scores: number[], 
    correlationFunc?: (...args: any[]) => number
): number {
    if (!correlationFunc) throw new Error("A correlation function must be provided.");

    const half1 = scores.filter((_, index) => index % 2 === 0);
    const half2 = scores.filter((_, index) => index % 2 !== 0);

    return correlationFunc(half1, half2);
}
