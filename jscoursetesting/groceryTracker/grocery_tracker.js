let gr1_amt;
let gr2_amt;
let gr3_amt;

function grocery_tracker()
{
    gr1_amt = parseFloat(document.getElementById('grocery1').value);
    gr2_amt = parseFloat(document.getElementById('grocery2').value);
    gr3_amt = parseFloat(document.getElementById('grocery3').value);
    let total_amt = gr1_amt + gr2_amt + gr3_amt;
    document.getElementById('result').innerText = `The total amount is : $ ${total_amt}`;
}