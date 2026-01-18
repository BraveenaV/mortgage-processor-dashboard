function updateStatus() {
    const checkboxes = document.querySelectorAll('.doc-check');
    const statusLabel = document.getElementById('loan-status');
    let checkedCount = 0;

    checkboxes.forEach(box => {
        if (box.checked) checkedCount++;
    });

    if (checkedCount === checkboxes.length) {
        statusLabel.textContent = "Clear-to-Close";
        statusLabel.classList.add('status-verified');
        alert("All mission-critical documents verified!");
    } else {
        alert("Incomplete Documentation. Review missing signatures.");
    }
}