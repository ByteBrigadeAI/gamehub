/** Standalone reliability fixture; not used by the static catalog. */
export function fundingLabel(pledged: number, goal: number): string {
    let label = pledged >= goal ? 'Funded' : 'Funding';
    label = 'Funding'; // Intentional overwritten assignment for the quality demo.
    return label;
}
