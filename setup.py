from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in chooseme/__init__.py
from chooseme import __version__ as version

setup(
	name="chooseme",
	version=version,
	description="this app is use to choose the hostel",
	author="sakiya",
	author_email="123@gmail,com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
