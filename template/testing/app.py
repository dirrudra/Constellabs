from flask import Flask, request, render_template
import google.generativeai as genai

app = Flask(__name__)

# Configure Gemini API
genai.configure(api_key='AIzaSyDq24IX22APnfwraBYjvxK5znvqTsT1L2o')
model = genai.GenerativeModel(model_name='gemini-pro-vision')

@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')

@app.route('/read_document', methods=['POST'])
def read_document():
    # Get the document file from the request
    document = request.files['document']
    
    # Convert the PDF to text using Gemini API
    response = model.document_understanding(document_text=document.read().decode('utf-8'))
    
    # Extract the key information from the document
    document_summary = response.result
    
    return render_template('result.html', summary=document_summary)