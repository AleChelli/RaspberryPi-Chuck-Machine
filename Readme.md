<h1>Readme</h1>
<h2>RaspberryPi Chuck Machine<h2>

<h3>Description:</h3>
<p>I started this work, because I want to create a Web Interface for Chuck, that Running on my RaspberryPi, so from my computer connected to the same network of the Raspberry I can control Chuck Machine, playing Music on-the-fly</p>

<h3>Install Chuck on Rpi</h3>
<h4>Requirements:</h4>
<li><a href="http://www.alsa-project.org/main/forums.html/Download">alsa-lib-1.0.25.tar.bz2</a></li> 
<li><a href="http://www.mega-nerd.com/libsndfile/">libsndfile-1.0.25.tar.gz</a></li> 
<li><a href="http://chuck.cs.princeton.edu">chuck-1.3.1.3.tgz</a></li>
<h4>Install the ALSA library</h4>
<pre>
<code>
tar -xjf alsa-lib-1.0.25.tar.bz2 
cd alsa-lib-1.0.25
sudo ./configure 
sudo make 
sudo make install
</code>
</pre>

<h4>Install libsndfile</h4> 
<pre>
<code>
tar -xvf libsndfile-1.0.25.tar.gz 
sudo ./configure 
sudo make 
sudo make install
</code>
</pre>

<h4>Install Bison</h4>
<pre><code>
sudo apt-get install bison
</code></pre>

<h4>Install Flex</h4>
<pre><code>
sudo apt-get install flex
</pre></code>

<h4>Install chuck</h4> 
<pre><code>
tar xvzf chuck-1.3.1.3.tgz 
cd chuck-1.3.1.3/src/ 
sudo make linux-alsa
cd ../
sudo make
sudo make install
</pre></code>

For get the audio from headphones jack 
<pre><code>
sudo amixer cset numid=3 1
</code></pre>

<h3>Web</h3>
<p> In order for get the things work, you need install NodeJs and npm</p>
<p> You need also, express module and socket.io </p>

<h4>Try</h4>
<p> For try this:</p>
<pre>
<code>
node node.js
</code>
</pre>

<p> Now point your web to: "localhost:8080"
	Write some chuck code and click ad button and your Raspberry Pi will start playing your code. 
</p>
