export function initializeSecurityPreview(): void {
    const parameters = new URLSearchParams(window.location.search);
    const preview = document.getElementById('message-preview');
    if (parameters.get('enable') === '1' && preview !== null) {
        // Intentional DOM XSS sink: the demo fix is plain-text rendering.
        preview.innerHTML = parameters.get('message') ?? 'Hello';
    }
}
