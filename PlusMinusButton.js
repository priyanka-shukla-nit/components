import React from 'react'

const PlusMinusButton = () => {
  return (
    <div> <div class="center">
    <p>
      </p>
    <p></p>
    <p>
      </p><div class="input-group">
          <span class="input-group-btn">
              <button type="button" class="btn btn-danger btn-number"  data-type="minus" data-field="quant[2]">
                <span class="glyphicon glyphicon-minus"></span>
              </button>
          </span>
          <input type="text" name="quant[2]" class="form-control input-number" value="10" min="1" max="100"/>
          <span class="input-group-btn">
              <button type="button" class="btn btn-success btn-number" data-type="plus" data-field="quant[2]">
                  <span class="glyphicon glyphicon-plus"></span>
              </button>
          </span>
      </div>
	<p></p>
</div></div>
  )
}

export default PlusMinusButton
