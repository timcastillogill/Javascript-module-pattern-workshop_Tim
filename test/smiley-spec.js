describe('smiley', function() {
  
  it('should take some text and return the text with a space and a smiley appended', function() {
    expect(smiley('Tim')).toEqual("Tim :)");
  })
});