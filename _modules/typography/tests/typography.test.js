'use strict';

import Typography from '../typography';

describe('Typography View', function() {

  beforeEach(() => {
    this.typography = new Typography();
  });

  it('Should run a few assertions', () => {
    expect(this.typography).to.exist;
  });

});
