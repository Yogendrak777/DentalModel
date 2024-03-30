from flask import Flask, request, render_template
import os
from utils.general import cv2


# Initializing flask app
app = Flask(__name__)
  
  
# Route for seeing a data
@app.route('/data')
def get_time():
  
    # Returning an api for showing in  reactjs
    return {
        'Name':"yogi", 
        "Age":"22",
        "programming":"reactjs java"
        }
 
@app.route('/analyse', methods=['GET', 'POST'])
def analyse():
    if request.method == 'POST':
        f = request.files['file']
        f.save(os.path.join('static/', f.filename))
        # File = request.form['file']
        # cv2.imwrite('static/', image_file)
        # print(File)
        from detect import Start
        Start('static/'+f.filename)
        return ("<h4>Processing the image... <a href='analyse'>Click here to refresh</a></h4>",200)
    return ("<h4>Processing the image... <a href='analyse'>Click here to refresh</a></h4>",200)

if __name__ == "__main__":
    app.run(debug=True)
    