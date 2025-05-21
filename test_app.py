import unittest
from app import app

class FlaskAppTestCase(unittest.TestCase):
    def setUp(self):
        app.testing = True
        self.client = app.test_client()

    def test_home(self):
        response = self.client.get('/')
        self.assertEqual(response.status_code, 200)
        self.assertIn(b"Welcome", response.data)

    def test_greet(self):
        response = self.client.get('/greet/Adil')
        self.assertEqual(response.status_code, 200)
        self.assertIn(b"Hello, Adil!", response.data)

    def test_greet_edge_case(self):
        response = self.client.get('/greet/123')
        self.assertEqual(response.status_code, 200)
        self.assertIn(b"Hello, 123!", response.data)

if __name__ == '__main__':
    unittest.main()
